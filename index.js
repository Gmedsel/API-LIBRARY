window.onload = function() {
    // Predefined books for each genre
    const predefinedBooks = {
        'Anime': [
            {
                title: 'Naruto: The Seventh Hokage and the Scarlet Spring',
                authors: ['Masashi Kishimoto'],
                publisher: 'VIZ Media',
                description: 'A story about Naruto Uzumaki and his journey to become the strongest Hokage.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7988916-L.jpg' }
            },
            {
                title: 'Attack on Titan: No Regrets',
                authors: ['Hajime Isayama'],
                publisher: 'Kodansha',
                description: 'The origin story of Levi Ackerman, one of the greatest soldiers in the world.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7613095-L.jpg' }
            },
            {
                title: 'Fullmetal Alchemist',
                authors: ['Hiromu Arakawa'],
                publisher: 'VIZ Media',
                description: 'The story of two brothers, Edward and Alphonse Elric, on their quest to recover their bodies.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7080030-L.jpg' }
            }
        ],
        'Love': [
            {
                title: 'Pride and Prejudice',
                authors: ['Jane Austen'],
                publisher: 'T. Egerton, Whitehall',
                description: 'A romantic novel of manners, following Elizabeth Bennet and her relationships.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8583237-L.jpg' }
            },
            {
                title: 'The Fault in Our Stars',
                authors: ['John Green'],
                publisher: 'Dutton Books',
                description: 'A love story between two cancer-stricken teens, Hazel Grace Lancaster and Augustus Waters.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7752342-L.jpg' }
            },
            {
                title: 'Me Before You',
                authors: ['Jojo Moyes'],
                publisher: 'Pamela Dorman Books',
                description: 'The poignant love story between Louisa Clark and Will Traynor.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8280289-L.jpg' }
            }
        ],
        'Horror': [
            {
                title: 'Dracula',
                authors: ['Bram Stoker'],
                publisher: 'Archibald Constable and Company',
                description: 'A gothic horror novel about Count Dracula and his attempt to move from Transylvania to England.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7984915-L.jpg' }
            },
            {
                title: 'The Shining',
                authors: ['Stephen King'],
                publisher: 'Doubleday',
                description: 'A terrifying story about a family trapped in a haunted hotel.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8882426-L.jpg' }
            },
            {
                title: 'Frankenstein',
                authors: ['Mary Shelley'],
                publisher: 'Lackington, Hughes, Harding, Mavor & Jones',
                description: 'A young scientist creates a creature in an unorthodox and dangerous experiment.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7790201-L.jpg' }
            }
        ]
    };

    // Function to display predefined books
    function displayPredefinedBooks() {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';  // Clear previous results

        // Loop through predefined books
        for (const genre in predefinedBooks) {
            const books = predefinedBooks[genre];
            const genreHeader = document.createElement('h2');
            genreHeader.innerText = `${genre} Books:`;
            resultsContainer.appendChild(genreHeader);

            books.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.classList.add('book-item');
                bookElement.onclick = () => openModal(book);

                const title = book.title || 'No title available';
                const authors = book.authors ? book.authors.join(', ') : 'Unknown author';
                const publisher = book.publisher || 'Unknown publisher';
                const description = book.description || 'No description available';
                const imageUrl = book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/150';

                bookElement.innerHTML = `
                    <img src="${imageUrl}" alt="Book Cover">
                    <h3>${title}</h3>
                    <p><strong>Authors:</strong> ${authors}</p>
                    <p><strong>Publisher:</strong> ${publisher}</p>
                    <p><strong>Description:</strong> ${description}</p>
                `;

                resultsContainer.appendChild(bookElement);
            });
        }
    }

    // Display predefined books for Anime, Love, and Horror
    displayPredefinedBooks();
};
