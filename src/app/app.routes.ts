import { Routes } from '@angular/router';
import { TeacherComponent } from '../component/teacher/teacher.component';
import { StudentComponent } from '../component/student/student.component';
import { UserComponent } from '../component/user/user.component';
import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from '../component/login/login.component';
import { authGuard } from '../guards/auth.guard';
import { ProductsComponent } from '../component/products/products.component';
import { ProductPaymentComponent } from '../component/product-payment/product-payment.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:'auth',component: LoginComponent},
    { path: 'teacher', component: TeacherComponent,canActivate:[authGuard] },
    { path: 'student', component: StudentComponent,canActivate:[authGuard] },
    { path: 'user', component: UserComponent,canActivate:[authGuard] },
    { path: 'home', component: HomeComponent, canActivate:[authGuard]},
    { path: 'products', component: ProductsComponent, canActivate:[authGuard]},
    { path: 'products/:id', component: ProductPaymentComponent, canActivate:[authGuard]}
];
