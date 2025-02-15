import React from "react";

const DetailsCard = ({ selectedAd, setSelectedAd }) => {
  if (!selectedAd) return null; // Ne rien afficher si aucun produit n'est sélectionné

  return (
    <div className="modal-overlay" onClick={() => setSelectedAd(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => setSelectedAd(null)}>✖</button>
        <img src={selectedAd.image} alt={selectedAd.title} className="modal-image" />
        <div className="modal-info">
          <h3 className="modal-title">{selectedAd.title}</h3>
          <p><b>Price:</b> {selectedAd.price}</p>
          <p><b>Category:</b> {selectedAd.category}</p>
          <p><b>City:</b> {selectedAd.city}</p>
          <p className="modal-description">{selectedAd.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
