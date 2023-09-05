import { Component } from '@angular/core';
// Initialization for ES Users
import { Carousel, Dropdown, Select, initTE } from "tw-elements";
initTE({ Select });

@Component({
  selector: 'app-job-section',
  templateUrl: './job-section.component.html',
  styleUrls: ['./job-section.component.css']
})
export class JobSectionComponent {

  ngOnInit() {
    initTE({ Carousel, Dropdown, Select });
  
  }

  jobs = [
    {
      title: 'Software Developer',
      company: 'Google.',
      skills: 'HTML, CSS, JavaScript',
      experience: '1-2 Years',
      description: `bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex item
      bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex item.bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex item
      bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex item
      bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex item
      bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex item.
      bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex itembg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex item.
      `,
    },
    {
      title: 'Software Engineer',
      company: 'Amazon.',
      skills: 'HTML, CSS, JavaScript',
      experience: '3-5 Years',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'frontend Developer',
      company: 'Meta.',
      skills: 'HTML, CSS, JavaScript',
      experience: '2-3 Years',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'Backend Developer',
      company: 'Zeta.',
      skills: 'HTML, CSS, JavaScript',
      experience: '5-7 Years',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // Add more job objects as needed
  ];

  selectedJob: any;

  selectJob(job: any) {
    this.selectedJob = job;
    console.log(this.selectedJob);
    
  }

}