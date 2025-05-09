import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true,
})
export class MyCounter {
  count: number = 0;

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };

  render() {
    return (
      <Host>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </Host>
    );
  }
}
