import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext;
  handleSetColor = (c) => {
    this.context.actions.setColor(c);
  };
  handleSetSubcolor = (c) => {
    this.context.actions.setSubcolor(c);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((c) => (
            <div
              key={c}
              style={{
                background: c,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() => this.handleSetColor(c)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(c);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
