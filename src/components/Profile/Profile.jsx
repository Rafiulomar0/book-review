import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="container mx-auto mt-12 font-work-sans">
      <div className="flex flex-col lg:flex-row gap-16 p-2">
        <div className="avatar">
          <div className="w-96 rounded">
            <img src="https://i.ibb.co/98fjzmt/Screenshot-2024-05-27-124753.png" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl">Name: SpongeBob</h2>
          <h2 className="text-xl">Occupation: Fry cook at the Krusty Krab</h2>
          <h2 className="text-xl">
            Residence: A pineapple under the sea in Bikini Bottom
          </h2>
          <h2 className="text-xl">
            Best Friend: Patrick Star, a friendly but dim-witted starfish
          </h2>
          <div className="space-y-2">
            <h2 className="text-2xl">Social: </h2>
            <div className="flex gap-5">
              <FaInstagram className="text-6xl text-red-600" />
              <FaTwitter className="text-6xl text-blue-500" />
            </div>
          </div>
          <div className="pt-5">
            <Link to="/pageToRead" className="btn btn-info text-white">
              Page To read
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
