import { Component } from '@angular/core';

// import 'rxjs/add/operator/map';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @NgModule({
//   imports: [
//       RouterModule
//   ],
//   declarations: [
//   ],
//   exports: [
//   ],
//   providers: [
//   ]
// })

export class AppComponent {
  title = 'Markham Hill Portal';

  // user: Observable<firebase.User>;
  // items: Observable<any[]>;
  // constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
  //     this.afAuth.auth.signInAnonymously();
  //     this.user = this.afAuth.authState;
  //     this.items = db.collection('items').valueChanges();
  //   }
}
