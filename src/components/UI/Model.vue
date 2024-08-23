<template>
    <div class="flex justify-center">
        <div class="card-body w-full">
            <div class="bg-white overflow-hidden p-4">
                <div class="flex justify-center items-center mb-4">

                    <h1 class="text-xl font-bold">New Product</h1>
                </div>
                <div class="flex justify-center mt-5 space-x-8">
                   
                  <div class="flex px-4 space-x-5"> 
                    <img src="../../assets/iMac.png" class="max-w-xs h-16 rounded-lg shadow-lg">
                </div>
                <div class="mt-2 space-y-2">
                        <div class="flex px-4 space-x-8">
                            <div>
                                <h2 class="text-xl">Drag image here</h2>
                                <h2 class="text-sm">or</h2>
                                <form action="">
                                   <input type="file" id="upload" accept=".doc,.docx,.pdf" hidden>
                                   <label for="upload" class="uploadlabel">
                                    <span><i class="fa fa-cloud-upload"></i></span>
                                    <p class="text-blue-500">Browse image</p>
                                   </label> 
                                </form>  
                            
                            </div>                           
                        </div>
                    </div>
                </div>
                <div class="center mt-5 space-x-0">
                <div class="flex justify-center mt-5 space-x-8">
                    <h2>Product Name</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter product name " required />   
                </div>
                <div class="flex justify-center mt-10 space-x-24">
                    <h2>Code</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter product ID" required />
                </div>
                <div class="flex justify-center mt-10 space-x-16">
                    <h2>Category</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter product categort" required />
                </div>
                <div class="flex justify-center mt-10 space-x-12">
                    <h2> Description</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter buying price" required />
                </div>
                <div class="flex justify-center mt-10 space-x-16">
                    <h2>Quantity</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter product quantity" required />
                </div>
                <div class="flex justify-center mt-10 space-x-24">
                    <h2>User</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter product unit" required />
                </div>
                <div class="flex justify-center mt-10 space-x-10">
                    <h2>Expiry Data</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter expiry data" required />
                </div>
                <div class="flex justify-center mt-10 space-x-16">
                    <h2>Location</h2>
                    <input type="email" name="floating_email" id="floating_email" class=" peer border border-slate-600" placeholder=" Enter threshold" required />
                </div>
                <div class="flex justify-center mt-10 space-x-10">
                    <button class="mb-4 px-4 py-2 border ">Discard</button>
                    <button class="mb-4 px-4 py-2 border bg-blue-400"> Add Product</button>
                </div>
             </div>
            </div>
        </div>
    </div>


</template>