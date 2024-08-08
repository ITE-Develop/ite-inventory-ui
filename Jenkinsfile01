pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "your-dockerhub-username/vuejs-app"
    }

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/your-username/your-vuejs-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    dockerImage.inside {
                        sh 'npm install'
                        sh 'npm run test'
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials-id') {
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sshagent(['your-server-ssh-credentials-id']) {
                        sh 'ssh -o StrictHostKeyChecking=no your-user@your-server "docker pull ${DOCKER_IMAGE}:latest && docker stop vuejs-app || true && docker rm vuejs-app || true && docker run -d -p 80:80 --name vuejs-app ${DOCKER_IMAGE}:latest"'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
