import * as React from 'react';
import { Button, Icon } from 'antd';

export default class Hello1 extends React.Component<object> {
  render() {

    return (
      <div className="hello">
        <div className="greeting">
          <Button>123</Button>
          <Icon type="team" />
          Hello typescript
        </div>
      </div>
    );
  }
}

