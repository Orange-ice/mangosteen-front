import {computed, onMounted, onUnmounted, Ref, ref} from 'vue';

interface Point {
  x: number;
  y: number;
}

type TouchEventHandler = (event: TouchEvent) => void;

interface Options {
  beforeStart?: TouchEventHandler;
  afterStart?: TouchEventHandler;
  beforeMove?: TouchEventHandler;
  afterMove?: TouchEventHandler;
  beforeEnd?: TouchEventHandler;
  afterEnd?: TouchEventHandler;
}

const useSwipe = (element: Ref<HTMLElement | undefined>, options?: Options) => {
  const refStart = ref<Point>();
  const refEnd = ref<Point>();
  const refDistance = computed(() => {
    if (!refStart.value || !refEnd.value) return null;
    return {
      x: refEnd.value.x - refStart.value.x,
      y: refEnd.value.y - refStart.value.y,
    };
  });
  const refDirection = computed(() => {
    if (!refDistance.value) return null;
    const {x, y} = refDistance.value;
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? 'right' : 'left';
    } else {
      return y > 0 ? 'down' : 'up';
    }
  });

  /** 是否在滑动中 */
  const refSwiping = ref(false);
  const onStart = (e: TouchEvent) => {
    options?.beforeStart?.(e);
    refSwiping.value = true;
    refEnd.value = refStart.value = {
      x: e.touches[0].screenX,
      y: e.touches[0].screenY,
    };
    options?.afterStart?.(e);
  };
  const onMove = (e: TouchEvent) => {
    options?.beforeMove?.(e);
    if (!refStart.value) return;
    refEnd.value = {
      x: e.touches[0].screenX,
      y: e.touches[0].screenY,
    };
    options?.afterMove?.(e);
  };
  const onEnd = (e: TouchEvent) => {
    options?.beforeEnd?.(e);
    refSwiping.value = false;
    options?.afterEnd?.(e);
  };

  onMounted(() => {
    if (!element.value) return;
    element.value.addEventListener('touchstart', onStart);
    element.value.addEventListener('touchmove', onMove);
    element.value.addEventListener('touchend', onEnd);
  });

  onUnmounted(() => {
    if (!element.value) return;
    element.value.removeEventListener('touchstart', onStart);
    element.value.removeEventListener('touchmove', onMove);
    element.value.removeEventListener('touchend', onEnd);
  });

  return {refSwiping, refDistance, refDirection};
};


export default useSwipe;