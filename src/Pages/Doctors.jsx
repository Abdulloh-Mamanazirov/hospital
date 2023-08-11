import { Button } from '@mui/material';

const Doctors = () => {
  return (
    <div>
      <section className="doctors">
        <div className="bg-gradient-to-r from-blue-300 to-transparent p-6 md:py-28 lg:pl-52">
          <h2 className="page-title text-6xl font-semibold">Doctors</h2>
          <p className="my-3 mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit ipsa incidunt.
          </p>
        </div>
      </section>
      <div className="container w-11/12 mx-auto py-10">
        <h2 className="text-6xl font-semibold text-center my-5">Our Staff</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {new Array(8).fill(0).map((e) => {
            return (
              <div className="card bg-white max-w-sm border border-gray-400 hover:shadow-2xl rounded-xl p-2 text-center transition-all hover:scale-[1.03] hover:bg-zinc-100">
                <img
                  className="rounded-xl object-cover object-center w-64 max-h-72"
                  src="https://blmparis.files.wordpress.com/2014/07/day.jpg"
                  alt=""
                />
                <h3 className="font-semibold text-xl py-2 text-blue-400">
                  Lelouch vi Britania
                </h3>
                <p className="pb-3 ">99th Emperor of Britania</p>
                <p className="pb-3 ">
                  {Math.floor(Math.random() * 12) + 1} years experience
                </p>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    fontSize: "15px",
                  }}
                >
                  Book an appointment
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Doctors
