export default function removeTasks(event) {
  event.stopPropagation();
  event.target.parentNode.remove();
}
