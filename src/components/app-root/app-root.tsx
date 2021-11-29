import { Component, h, State } from '@stencil/core';
import { CITIES } from '../../assets/cities';
import { MISSIONS } from '../../assets/missions';
import { USERS } from '../../assets/users';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() data: any[] = USERS;

  render() {
    return (
      <div>
        <header>
          <h1>Yoobic Grid Component</h1>
        </header>

        <main>
          <div class="option-buttons">
            <p class="title">Inject different data: </p>
            <button onClick={() => (this.data = USERS)}>Users</button>
            <button onClick={() => (this.data = MISSIONS)}>Missions</button>
            <button onClick={() => (this.data = CITIES)}>Cities</button>
          </div>

          <yoobic-grid data={this.data}></yoobic-grid>
        </main>
      </div>
    );
  }
}
