import { ReactElement } from "react";

export interface NavbarLink {
  label: string;
  path: string;
  icon: (isActive?: boolean) => ReactElement;
}

export type ServiceType = {
  name: string;
  image: string;
  text: string;
  isNew: boolean;
};

export type HeroType = {
  name: string;
  image: string;
  text: string;
  actionText: string;
};
