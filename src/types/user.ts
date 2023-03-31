export type User = {
  name: string;
  email: string;
};

export type Property = {
  id: number;
  name: string;
};

export type Profile = {
  token: string;
  user: User;
  property: Property;
  properties: Property[];
};
