import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../models/taskModel'
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  listId: String;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
      })
  }

  createTask(title: String, listId: String) {
    this.taskService.createTasks(title, this.listId).subscribe((newTask: Task) => {
      this.router.navigate(['../'], {relativeTo: this.route})
    });
  }
}
