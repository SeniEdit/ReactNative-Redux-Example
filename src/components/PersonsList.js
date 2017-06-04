import React, {Component} from 'react';
import {Content, List, ListItem, Text} from 'native-base';

class PersonsList extends Component {

  render() {
    let items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can', 'Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can', 'Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

    return(
      <Content>
      <List>
          <ListItem itemHeader>
              <Text>Personen</Text>
          </ListItem>
      </List>
      <List dataArray={items}
            renderRow={(item) =>
                <ListItem>
                    <Text>{item}</Text>
                </ListItem>
            }>
      </List>
      </Content>
    );
  }
}

export default PersonsList;
