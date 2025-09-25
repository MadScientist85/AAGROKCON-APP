from flask import Blueprint, jsonify, request
from flask_cors import cross_origin
import json
import os

registry_bp = Blueprint('registry', __name__)

# Sample component registry data
COMPONENTS_DATA = {
    "badge": {
        "name": "badge",
        "type": "registry:ui",
        "description": "A versatile badge component with multiple variants for status indicators",
        "registryDependencies": [],
        "dependencies": ["lucide-react", "class-variance-authority"],
        "files": [
            {
                "path": "components/ui/badge.jsx",
                "content": "// Badge component implementation",
                "type": "registry:ui"
            }
        ],
        "tailwind": {
            "config": {
                "theme": {
                    "extend": {}
                }
            }
        },
        "cssVars": {},
        "meta": {
            "category": "ui",
            "subcategory": "display",
            "tags": ["badge", "status", "indicator", "ui"]
        }
    },
    "avatar": {
        "name": "avatar",
        "type": "registry:ui", 
        "description": "User avatar component with fallback and grouping support",
        "registryDependencies": [],
        "dependencies": ["@radix-ui/react-avatar"],
        "files": [
            {
                "path": "components/ui/avatar.jsx",
                "content": "// Avatar component implementation",
                "type": "registry:ui"
            }
        ],
        "tailwind": {
            "config": {
                "theme": {
                    "extend": {}
                }
            }
        },
        "cssVars": {},
        "meta": {
            "category": "ui",
            "subcategory": "display",
            "tags": ["avatar", "user", "profile", "image"]
        }
    },
    "textarea": {
        "name": "textarea",
        "type": "registry:ui",
        "description": "Multi-line text input component for forms",
        "registryDependencies": [],
        "dependencies": [],
        "files": [
            {
                "path": "components/ui/textarea.jsx", 
                "content": "// Textarea component implementation",
                "type": "registry:ui"
            }
        ],
        "tailwind": {
            "config": {
                "theme": {
                    "extend": {}
                }
            }
        },
        "cssVars": {},
        "meta": {
            "category": "ui",
            "subcategory": "form",
            "tags": ["textarea", "input", "form", "text"]
        }
    },
    "button": {
        "name": "button",
        "type": "registry:ui",
        "description": "Versatile button component with multiple variants and sizes",
        "registryDependencies": [],
        "dependencies": ["@radix-ui/react-slot", "class-variance-authority"],
        "files": [
            {
                "path": "components/ui/button.jsx",
                "content": "// Button component implementation", 
                "type": "registry:ui"
            }
        ],
        "tailwind": {
            "config": {
                "theme": {
                    "extend": {}
                }
            }
        },
        "cssVars": {},
        "meta": {
            "category": "ui",
            "subcategory": "form",
            "tags": ["button", "action", "form", "ui"]
        }
    },
    "textarea-with-button": {
        "name": "textarea-with-button",
        "type": "registry:ui",
        "description": "Composite component combining textarea with action button",
        "registryDependencies": ["button", "textarea"],
        "dependencies": [],
        "files": [
            {
                "path": "components/ui/textarea-with-button.jsx",
                "content": "// TextareaWithButton component implementation",
                "type": "registry:ui"
            }
        ],
        "tailwind": {
            "config": {
                "theme": {
                    "extend": {}
                }
            }
        },
        "cssVars": {},
        "meta": {
            "category": "ui",
            "subcategory": "form",
            "tags": ["textarea", "button", "composite", "form"]
        }
    },
    "dashboard-01": {
        "name": "dashboard-01",
        "type": "registry:block",
        "description": "Complete dashboard layout with sidebar, charts and data tables for GROKcon",
        "registryDependencies": ["card", "badge", "button"],
        "dependencies": ["lucide-react", "recharts"],
        "files": [
            {
                "path": "components/blocks/dashboard-01.jsx",
                "content": "// Dashboard block component implementation",
                "type": "registry:block"
            }
        ],
        "tailwind": {
            "config": {
                "theme": {
                    "extend": {}
                }
            }
        },
        "cssVars": {},
        "meta": {
            "category": "blocks",
            "subcategory": "dashboard",
            "tags": ["dashboard", "analytics", "government", "contracting", "grokcon"]
        }
    },
    "sidebar-02": {
        "name": "sidebar-02",
        "type": "registry:block",
        "description": "Collapsible sidebar navigation for GROKcon application",
        "registryDependencies": ["button", "badge"],
        "dependencies": ["lucide-react"],
        "files": [
            {
                "path": "components/blocks/sidebar-02.jsx",
                "content": "// Sidebar block component implementation",
                "type": "registry:block"
            }
        ],
        "tailwind": {
            "config": {
                "theme": {
                    "extend": {}
                }
            }
        },
        "cssVars": {},
        "meta": {
            "category": "blocks",
            "subcategory": "navigation",
            "tags": ["sidebar", "navigation", "collapsible", "grokcon"]
        }
    }
}

@registry_bp.route('/components', methods=['GET'])
@cross_origin()
def list_components():
    """List all available components in the registry"""
    components = []
    for name, data in COMPONENTS_DATA.items():
        components.append({
            "name": name,
            "type": data["type"],
            "description": data["description"],
            "category": data["meta"]["category"],
            "tags": data["meta"]["tags"]
        })
    
    return jsonify({
        "components": components,
        "total": len(components)
    })

@registry_bp.route('/components/<component_name>', methods=['GET'])
@cross_origin()
def get_component(component_name):
    """Get detailed information about a specific component"""
    if component_name not in COMPONENTS_DATA:
        return jsonify({"error": "Component not found"}), 404
    
    return jsonify(COMPONENTS_DATA[component_name])

@registry_bp.route('/components/<component_name>/install', methods=['POST'])
@cross_origin()
def install_component(component_name):
    """Simulate component installation"""
    if component_name not in COMPONENTS_DATA:
        return jsonify({"error": "Component not found"}), 404
    
    component = COMPONENTS_DATA[component_name]
    
    # Simulate installation process
    installation_steps = [
        f"Downloading {component_name}...",
        "Resolving dependencies...",
        "Installing files...",
        "Updating configuration..."
    ]
    
    if component["registryDependencies"]:
        installation_steps.insert(1, f"Installing registry dependencies: {', '.join(component['registryDependencies'])}")
    
    if component["dependencies"]:
        installation_steps.insert(-1, f"Installing npm dependencies: {', '.join(component['dependencies'])}")
    
    return jsonify({
        "success": True,
        "component": component_name,
        "steps": installation_steps,
        "files_installed": len(component["files"]),
        "dependencies_resolved": len(component["dependencies"]) + len(component["registryDependencies"])
    })

@registry_bp.route('/search', methods=['GET'])
@cross_origin()
def search_components():
    """Search components by query, category, or tags"""
    query = request.args.get('q', '').lower()
    category = request.args.get('category', '')
    tag = request.args.get('tag', '')
    
    results = []
    
    for name, data in COMPONENTS_DATA.items():
        match = False
        
        # Search by query in name, description, or tags
        if query:
            if (query in name.lower() or 
                query in data["description"].lower() or
                any(query in t.lower() for t in data["meta"]["tags"])):
                match = True
        
        # Filter by category
        if category and data["meta"]["category"] != category:
            match = False
        
        # Filter by tag
        if tag and tag not in data["meta"]["tags"]:
            match = False
        
        # If no filters specified, include all
        if not query and not category and not tag:
            match = True
        
        if match:
            results.append({
                "name": name,
                "type": data["type"],
                "description": data["description"],
                "category": data["meta"]["category"],
                "tags": data["meta"]["tags"]
            })
    
    return jsonify({
        "results": results,
        "total": len(results),
        "query": query,
        "filters": {
            "category": category,
            "tag": tag
        }
    })

@registry_bp.route('/categories', methods=['GET'])
@cross_origin()
def get_categories():
    """Get all available component categories"""
    categories = set()
    for data in COMPONENTS_DATA.values():
        categories.add(data["meta"]["category"])
    
    return jsonify({
        "categories": sorted(list(categories))
    })

@registry_bp.route('/tags', methods=['GET'])
@cross_origin()
def get_tags():
    """Get all available component tags"""
    tags = set()
    for data in COMPONENTS_DATA.values():
        tags.update(data["meta"]["tags"])
    
    return jsonify({
        "tags": sorted(list(tags))
    })

@registry_bp.route('/health', methods=['GET'])
@cross_origin()
def health_check():
    """Health check endpoint for the registry API"""
    return jsonify({
        "status": "healthy",
        "service": "GROKcon Component Registry API",
        "version": "1.0.0",
        "components_available": len(COMPONENTS_DATA)
    })

