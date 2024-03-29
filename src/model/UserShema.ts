import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Login {
  @Prop({ type: String })
  username: string;

  @Prop({ type: String })
  password: string;

  @Prop()
  refreshToken: string;
}

export const UserShema = SchemaFactory.createForClass(Login);
