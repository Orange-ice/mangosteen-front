interface FData {
  [k: string]: string | number | null | undefined | FData;
}

type Rule<T> = { // 这里 T 表示 FData 的类型
  key: keyof T;
  message: string
} & ({ type: 'required' } | { type: 'pattern', regex: RegExp })

type Rules<T> = Rule<T>[];

export type {FData, Rule, Rules};

export const validate = <T extends FData>(formData: T, rules: Rules<T>) => {
  type Errors = {
    [k in keyof T]?: string[]
  }
  const errors: Errors = {};

  rules.forEach(rule => {
    const {key, message, type} = rule;
    const value = formData[key];
    switch (type) {
      case 'required':
        if (value !== 0 && !value) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
      case 'pattern':
        if (value && !rule.regex.test(value.toString())) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
      default:
        break;
    }
  });
  return errors;
};
