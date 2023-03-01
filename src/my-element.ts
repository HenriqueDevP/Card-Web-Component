import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('first-card')
export class FirstCard extends LitElement {
  @property({type: String}) state = 'todo';
  @property({type:String}) title=''
  @property({type:String}) description=''

  static styles= css `
  .card{
    width:200px;
    height:300px;
    box-shadow:2px 2px 2px #000;
    border-radius:10px;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
    color:#f1f1f1;
  }
.todo{
background-color:red;
}
.complete{
  background:green;
}

button{
  min-width:80px;
  padding:4px;
border-radius:5px;
font-size:20px;
}
  `
   render() {
    return html`
<div class='card ${this.state}'>
<h3>${this.title}</h3>
<p>${this.description}</p>
<button @click="${this._ToggleCard}">${this.state}!</button>
</div>

     
    `;
  }
  private _ToggleCard() {
    if(this.state==='complete'){
      this.state='todo'
    }
    else if(this.state==='todo'){
      this.state='complete'
    }
  }
}
declare global{
  interface HTMLElementTagNameMap {
'first-card':FirstCard
  }
}