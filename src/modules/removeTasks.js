function removeTask(event) {
  const li = event.target.parentElement;
  li.remove();
}

export default removeTask;
