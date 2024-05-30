import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='Beli Properti Disini'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Jelajahi Properti',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Temukan properti impian anda. Tandai properti dan hubungi pemiliknya.
          </InfoBox>
          <InfoBox
            heading='Jual Properti Disini'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Jual Properti',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
            Daftarkan properti anda dan jangkau pembeli potensial. Pembeli jangka pendek atau jangka panjang.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
