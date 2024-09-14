import { Component } from '@angular/core';
import { SimpleListComponent } from "../../shared/simple-list/simple-list.component";
import { SimpleListItemComponent } from "../../shared/simple-list-item/simple-list-item.component";
import { ISimpleListItem } from "../../shared/simple-list-item/simple-list-item.interface";
import { NgForOf } from "@angular/common";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NgForOf,
        SimpleListComponent,
        SimpleListItemComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {


    list: ISimpleListItem[] = [
        {
            index: 1,
            title: 'Fork this Repository',
            linkTo: 'url',
            link: 'https://github.com/SafeguardPrivacy/Developer-Test',
            content: 'Visit github and fork this repository to get started.',
        },
        {
            index: 2,
            title: 'Commit Your Code After Each Task',
            linkTo: null,
            content: 'After each task is complete, commit the code to your repo using the task\'s title as the commit message.',
        },
        {
            index: 3,
            title: 'Add Local Temperature to the Header',
            linkTo: 'routerLink',
            link: '/temperature',
            content: 'Use the openweathermap.org api to show the user\'s latest temperature information in the header.',
        },
        {
            index: 4,
            title: 'Complete the Taskboard Logic',
            linkTo: 'routerLink',
            link: '/taskboard',
            content: 'Navigate to the taskboard page and complete the logic as described.',
        },
        {
            index: 5,
            title: 'Create a Notes Component',
            linkTo: 'routerLink',
            link: '/notes',
            content: 'We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes.',
        },
        {
            index: 6,
            title: 'Determine the Smallest Missing Integer',
            linkTo: 'routerLink',
            link: '/integer',
            content: 'Write an efficient algorithm to determine the smallest missing integer from an array.',
        },
        {
            index: 7,
            title: 'Publish your test to a (free) GitHub Pages Site',
            linkTo: 'routerLink',
            link: '/ghpages',
            content: 'Once all the tasks have been completed, publish your Developer Test to GitHub Pages.',
        },
    ];

}
