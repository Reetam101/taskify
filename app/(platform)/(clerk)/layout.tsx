const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex mt-10 items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;
