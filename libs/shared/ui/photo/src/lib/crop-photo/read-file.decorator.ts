import 'reflect-metadata';

// Property Decorator
export function ReadFile() {
  return function(target: Object, key: string | symbol) {

    let val = target[key];

    const getter = () =>  {
        return val;
    };
    const setter = (next) => {
        console.log('updating flavor...');
        const reader = new FileReader();
        reader.readAsDataURL(next);
        reader.onload = ev => val = ev.target.result;
        // val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });

  };
}
