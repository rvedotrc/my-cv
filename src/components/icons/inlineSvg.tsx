const InlineSvg = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => (
    <span style={{display: "inline-block"}}>{children}</span>
);

export default InlineSvg;