export default function TreatmentRedirect() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/#como-funciona",
      permanent: true,
    },
  };
}
