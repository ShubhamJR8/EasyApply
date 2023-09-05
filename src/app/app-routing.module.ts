import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { JobSectionComponent } from './job-section/job-section.component';

const routes: Routes = [
  { path: "", component: JobSeekerComponent },
  { path: "jobs", component: JobSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
