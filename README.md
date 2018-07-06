# APIValidationWrapper
Express validator wrapper as middleware with custom validations support

   - Add just a json metadata for each API 
   
    {
		    
        'q:not_empty': ['name']
	 
    }
    
  - Above will expect a non empty query parameter `name`
  
  - Similarly we can validate Path parameters, Body
  
  
  
**Custom Validations**
  
    {
	 	    
        'q:not_empty': ['name'],
		    
        'q:aName': ['name']
	  
    }
    
  - `aName` is not predefined method. You can  provide the logic as stated by [ExpressValidator](https://express-validator.github.io/docs/custom-validators-sanitizers.html)
