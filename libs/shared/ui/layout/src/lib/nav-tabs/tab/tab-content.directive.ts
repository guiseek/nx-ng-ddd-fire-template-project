import { ComponentFactoryResolver, ComponentRef, Directive, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[seekTabContent]',
  exportAs: 'seekTabContent'
})
export class TabContentDirective {
  private dynamicCmp = new WeakMap<any, ComponentRef<any>>();

  constructor(
    public viewContainerRef: ViewContainerRef,
    public componentFactory: ComponentFactoryResolver
  ) { }

  addComponent<T>(cmp: Type<T>) {
    const componentFactory = this.componentFactory
      .resolveComponentFactory(cmp);

    const componentRef = this.viewContainerRef
      .createComponent(componentFactory);

    this.dynamicCmp.set(componentRef.instance, componentRef);

    return componentRef;
  }

  removeComponent(cmp: any) {
    if (this.dynamicCmp.has(cmp)) {
      this.dynamicCmp.get(cmp).destroy();
      this.dynamicCmp.delete(cmp);
    }
  }

}
