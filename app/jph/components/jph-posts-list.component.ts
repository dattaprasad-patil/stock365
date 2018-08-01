import { Component, OnInit, Inject } from '@angular/core';
import { Post } from "../models/post";

import { JphService } from "../services/jph.service";

@Component({
    selector: 'jph-posts',
    templateUrl: '../views/jph-posts-list.component.html'
})

export class JphPostsListComponent implements OnInit {
    constructor(@Inject(JphService) private _jpService: JphService) {

    }
    title: string = "Json Placeholder data!!"
    posts: Post[] = [];
    ngOnInit() {
        this._jpService.getAllPosts().subscribe(
            data => this.posts = data,
            error => console.error(error),
            () => console.log("Service call Completed!!")
        );
    }
}