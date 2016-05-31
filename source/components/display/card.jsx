import Radium from 'radium';
import React from 'react';
import { sizes, colors, durations, easings } from '../variables';
import scale from 'scale-unit'

@Radium
export default class extends React.Component {
  render() {
    const { props, state } = this;

    return <div style={ styles.container(props, state) }>
      <a href="#" key="header" style={ styles.header(props, state) }>
        Hello friend
      </a>
      {props.children}
    </div>
  }
}

export const styles = {
  container: (props, state) => ({

  }),

  header: (props, state) => ({
    display: 'block',
    padding: sizes.space(),

    fontFamily: 'sans-serif',
    fontSize: sizes.text(),
    textDecoration: 'none',
    transition: `${durations.fast} ${easings.normal} all`,

    backgroundColor: colors.light,
    color: colors.dark,

    ':hover': {
      backgroundColor: colors.dark10
    },

    ':active': {
      backgroundColor: colors.red,
      color: colors.light
    }
  })
}
