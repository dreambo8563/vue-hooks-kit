import { ref as u, onMounted as i, onUnmounted as r } from "vue";
function s() {
  const e = u(0), n = u(0);
  function o(t) {
    e.value = t.clientX, n.value = t.clientY;
  }
  return i(() => window.addEventListener("mousemove", o)), r(() => window.removeEventListener("mousemove", o)), { x: e, y: n };
}
export {
  s as useMouse
};
