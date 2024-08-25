import { SText, type STextProps } from "../SText";

export type SSubtitleProps = STextProps;

export const SSubtitle = ({ typography = "body.medium", children, ...props }: STextProps) => {
  return <SText typography={typography} mt={4} {...props}>
    {children}
  </SText>
};
