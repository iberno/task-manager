import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getLists() {
    return this.webReqService.get('lists');
  }

  createList(title: String) {
    // send a request to create a list
    return this.webReqService.post('lists', { title });
  }

  getTasks(listId: String) {
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  createTasks(title: String, listId: String){
    return this.webReqService.post(`lists/${listId}/tasks`, {title})
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    })
  }
}
