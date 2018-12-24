import React, { Component } from 'react';
import { Container,
		 LoadingContainer
 } from './style.js';
import {
  List, message, Avatar, Spin,
} from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import profile from '../../statics/profile.jpg';

const fakeDataUrl = './customer.json';

class InfiniteListExample extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  }

  componentDidMount() {
    this.fetchData((res) => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <Container>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src= {profile} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <LoadingContainer>
                <Spin />
              </LoadingContainer>
            )}
          </List>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default InfiniteListExample;