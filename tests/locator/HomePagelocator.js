const HomePageLoc = {
    userIcon :"[title='My Account']",
    
}












const locator = {
    setGender(gender){
        if(gender == "Male"){
            this.usergender = input[value='Male']
        }else{
            this.usergender = input[value='Female']
        }
    },
    firstNameLoc : "#firstName",
    lastNameLoc : "#lastName",
    userEmailLoc : "#userEmail",
    usermobLoc : "#userMobile",
    userOccLoc : "select[formcontrolname = 'occupation']",
    userPassLoc : "#userPassword",
    ageVerifyCheckBoxLoc : "input[type='checkbox']",
    registerBtnLoc : "#login",
    signupLinkLoc : "#[class*=login]>a",
    
}