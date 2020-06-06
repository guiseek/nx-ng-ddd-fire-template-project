import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'seek-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent {
  @Input() public data: any;
	@Input() public cardRef: any;
  @Input() public listRef: any;

  private preferedShowModeKey = 'typeToShow';
	public get typeToShow(): string {
		return window.localStorage.getItem(this.preferedShowModeKey) || 'list';
	}
	public set typeToShow(showMode: string) {
		window.localStorage.setItem(this.preferedShowModeKey, showMode);
	}

  changeView(type: 'cards' | 'list') {
    this.typeToShow = type;
  }

	public showCards() {
		this.typeToShow = 'cards';
	}

	public showList() {
		this.typeToShow = 'list';
	}
}
