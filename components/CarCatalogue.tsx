
import { CarCard, CustomFilter, SearchBar, ShowMore} from '@/components';
import { fetchCars } from '@/utils';
import { HomeProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';

export default async function CarCatalogue({searchParams}: HomeProps ) {
  
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || '2022',
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="mt-12 padding-x py-24 max-width" id="discover">
        <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container z-0">
                <CustomFilter title="fuel" options={fuels}/>
                <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
        </div>
        {!isDataEmpty ? (
            <section>
                <div className="home__cars-wrapper">
                    {allCars.map((car, i) => (
                        <CarCard car={car} key={i}/>
                    ))}
                </div>
                <ShowMore 
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
                />
            </section>
        ) : (
        <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
        </div>
        )}
    </div>
  )
}


