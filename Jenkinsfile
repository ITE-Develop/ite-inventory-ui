pipeline {
    agent {
        dokcer {image 'node:20.16.0-alpine3.20'}
    }

    stages {
        
        stage('Container') {
            steps {
                sh 'node --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'ls -a'
                }
            }
        }

        stage('Test') {
            steps {
                echo "Testing"
            }
        }

        stage('Push Docker Image') {
            steps {
                echo "up stage"
            }
        }

        stage('Deploy') {
            steps {
                echo "deployment"
            }
        }
    }

}
