import React from "react";
// import {View, Text} from 'react-native';

class Parallax extends React.Component {
  constructor(element) {
    this.element = element;
    this.ratio = parseFloat(element.dataset.parallax);
  }
  //return parallax[]
  static bind() {
    return Array.from(document.querySelectorAll("[data-parallax]")).map(
      (element) => {
        return new Parallax(element);
      }
    );
  }
}
Parallax.bind();
