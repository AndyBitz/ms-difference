const getStyle = (ms, running) => {
  return {
    right: 0,
    transition: `all ${ms}ms linear`
  }
}


export default ({ ms, running }) => (
  <div>
    <span style={running ? getStyle(ms) : null} />

    <legend>
      {ms} ms
    </legend>

    <style jsx>
    {`
      div {
        width: 13em;
        height: 2em;
        margin-bottom: 1em;
        position: relative;
        background-color: lightgrey;
      }

      span {
        top: 0;
        bottom: 0;
        width: 1px;
        right: 100%;
        display: block;
        position: absolute;
        background-color: red;
      }

      legend {
        height: 100%;
        display: flex;
        font-size: .8em;
        text-align: center;
        align-items: center;
        font-family: monospace;
        justify-content: center;
      }
    `}
    </style>
  </div>
)
