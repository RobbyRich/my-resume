
function Main(props) {

  return (
    <section class="bg-white border-b py-8 mt-14 lg:py-0">
      <div class="container max-w-6xl mx-auto mb-8 text-center">
        {props.children}
      </div>
    </section>
  );
}

export default Main;