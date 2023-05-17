import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Todo from './components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Todo />
        <Footer />
      </>
    );
  }
}
