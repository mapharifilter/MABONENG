
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtService } from 'src/app/services/auth/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //=================================properties================================
  LoginForm!:UntypedFormGroup;

  user_id :any;
  user:any

   name:string = '';
      surname:string = '';

     email:string = '';
    token :string = ''

  //==================================methods==================================

  get_login()
  {
     const user = 
     {
       email:this.LoginForm.value.email,
       password:this.LoginForm.value.password
     }

     console.log("From Login Form ",user)

    
     if(this.LoginForm.invalid)
     {
      return
     }else{
       

        this.auth.set_login(user).subscribe((login_data:any)=>{

          // console.log("From backend",login_data)
 
          //    this.user_id = login_data.user[0].user_id;
          //    localStorage.setItem('user_id',this.user_id);

          this.name = this.jwt.getDataStrored(login_data.token).name;
          localStorage.setItem('user_id',this.user_id);
          
 
               //route to the dashboard after loggin in
             this.path.navigate(['/dash'])

            },
             (err) => {
               alert("User does not exist, Register First")
              return err.error.errorMessage;
            
            }
          );
     }
  }

  get validate() {
    return this.LoginForm.controls;
  }

  //=================================defaults====================================
  constructor(private auth:AuthService,private path:Router,private jwt : JwtService) { }
  ngOnInit(): void {

    this.LoginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('',[Validators.required])
    })
  }
}







// import { Component, OnInit } from '@angular/core';
// import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth/auth.service';
// import { JwtService } from 'src/app/services/auth/jwt.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   //=================================properties================================
//   LoginForm!:UntypedFormGroup;

//   user_id :any;
//   user:any

//   // name:string = '';
//   // surname:string = '';

//   // email:string = '';
//   // token :string = '';




//   //==================================methods==================================

//   get_login()
//   {
//      const user = 
//      {
//        email:this.LoginForm.value.email,
//        password:this.LoginForm.value.password
//      }

//      console.log("From Login Form ",user)

    
//      if(this.LoginForm.invalid)
//      {
//       return
//      }else{
       

//         this.auth.set_login(user).subscribe((login_data:any)=>{

//           console.log("From backend",login_data)
 
//              this.user_id = login_data.user[0].user_id;
//              localStorage.setItem('user_id',this.user_id);



//             console.log(login_data);
 
//                //route to the dashboard after loggin in
//              this.path.navigate(['/dash'])

//             },
//              (err) => {
//                alert("User does not exist, Register First")
//               return err.error.errorMessage;
            
//             }
//           );
//      }
//   }

//   get validate() {
//     return this.LoginForm.controls;
//   }

//   //=================================defaults====================================
//   constructor(private auth:AuthService,private path:Router , jwt : JwtService) { }
//   ngOnInit(): void {

//     this.LoginForm = new UntypedFormGroup({
//       email: new UntypedFormControl('', [Validators.required, Validators.email]),
//       password: new UntypedFormControl('',[Validators.required])
//     })
//   }
// }
