const products = [
    { id: 1, name: "Gold Solitaire Ring", type: "Ring", price: 1250, img: "https://plus.unsplash.com/premium_photo-1674498704099-bdd05f6fc274?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Diamond Drop Earrings", type: "Earring", price: 2800, img: "https://plus.unsplash.com/premium_photo-1674255466849-b23fc5f5d3eb?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Pearl Chain Necklace", type: "Necklace", price: 950, img: "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?auto=format&fit=crop&q=80&w=800" }
];

let cart = [];

function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);
    
    grid.innerHTML = filtered.map(p => `
        <div class="border p-6 hover:shadow-xl transition group">
            <img src="${p.img}" class="w-full h-64 object-cover mb-4 group-hover:scale-[1.02] transition" alt="${p.name}">
            <h4 class="text-xl font-bold font-serif">${p.name}</h4>
            <p class="text-stone-500">$${p.price}</p>
            <button onclick="addToCart(${p.id})" class="mt-4 w-full border border-stone-900 py-2 hover:bg-stone-900 hover:text-white transition">Add to Bag</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    document.getElementById('cart-count').textContent = cart.length;
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = cart.map(item => `
        <div class="flex justify-between border-b py-2 text-sm">
            <span>${item.name}</span>
            <span>$${item.price}</span>
        </div>
    `).join('');
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('hidden');
}

function filterProducts(type) {
    renderProducts(type);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});