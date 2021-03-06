import {computed, defineComponent, PropType, ref} from 'vue';
import {emojiList} from './emojiList';
import s from './emojiSelect.module.scss';

const EmojiSelect = defineComponent({
  props: {
    modelValue: {
      type: String,
    },
    error: {
      type: Boolean as PropType<boolean>,
    },
  },
  setup(props, context) {
    const refSelected = ref(0);
    const table: [string, string[]][] = [
      ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
        'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
        'face-glasses', 'face-concerned', 'face-negative', 'face-costume',
      ]],
      ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
        'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
      ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
        'person-activity', 'person-sport', 'person-resting']],
      ['衣服', ['clothing']],
      ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
        'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
      ['植物', ['plant-flower', 'plant-other']],
      ['自然', ['sky & weather', 'science']],
      ['食物', [
        'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
        'food-marine', 'food-sweet',
      ]],
      ['运动', ['sport', 'game']],
    ];

    const onClickTab = (index: number) => {
      refSelected.value = index;
    };

    const onClickEmoji = (emoji: string) => {
      context.emit('update:modelValue', emoji);
    };

    const emojis = computed(() => {
      const selectedItem = table[refSelected.value][1];
      const selectEmojiList = selectedItem.map(category => emojiList.find(item => item[0] === category));
      return selectEmojiList.map(emojiStrs => {
        return emojiStrs?.[1].map(emoji => <li
          class={props.modelValue === emoji ? s.selectedEmoji : ''}
          onClick={() => onClickEmoji(emoji)}>{emoji}</li>);
      });

    });
    return () => (
      <div class={[s.emojiList, props.error && s.error]}>
        <nav>
          {table.map((item, index) =>
            <span
              class={refSelected.value === index ? s.selected : ''}
              onClick={() => onClickTab(index)}
            >{item[0]}</span>)}
        </nav>
        <ol>
          {emojis.value}
        </ol>
      </div>
    );
  },
});

export default EmojiSelect;
