class FileUploader extends React.Component{
  render() {
    return <input onChange={this.props.onSelect} type="file"/>;
  }
}
