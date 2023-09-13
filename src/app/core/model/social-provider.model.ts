import { ProviderEnum } from '../../shared/enum/provider.enum';

export interface ISocialProvider {
	label: string;
	icon: string;
	size: string;
	outline: boolean;
	name: ProviderEnum;
}
