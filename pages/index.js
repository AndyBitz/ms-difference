import {Component} from 'react'
import Mover from '../components/mover'


class Index extends Component {
  constructor(...args) {
    super(...args)

    // bindings
    this.run = this.run.bind(this)

    // state
    this.state = {
      running: false
    }
  }


  run() {
    clearTimeout(this.timeout)

    this.setState((state) => {
      state.running = true
      return state
    })

    this.timeout = setTimeout(() => {
      this.setState((state) => {
        state.running = false
        return state
      })
    }, 1000)
  }


  render() {
    return (
      <main>
        <button
          children={'run'}
          onClick={this.run}
          disabled={this.state.running}
        />

        <Mover running={this.state.running} ms={1} />
        <Mover running={this.state.running} ms={2} />
        <Mover running={this.state.running} ms={10} />
        <Mover running={this.state.running} ms={100} />
        <Mover running={this.state.running} ms={500} />
        <Mover running={this.state.running} ms={1000} />


        <style jsx>
        {`
          button {
            margin-bottom: 1em;
          }
        `}
        </style>
      </main>
    )
  }
}


export default Index
