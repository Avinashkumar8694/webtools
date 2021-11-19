import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { QuestionexplorerComponent } from "./sections/questionexplorer/questionexplorer.component";

const routes: Routes = [
  { path: "questionsexplorer", component: QuestionexplorerComponent },
  { path: "home", component: HomeComponent },
  // { path: "user-profile", component: ProfileComponent },
  { path: "abc/register", component: SignupComponent },
  // { path: "landing", component: LandingComponent },
  // { path: "login", component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      // useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
